import {createRequire} from 'module'
import Path from 'path'
import {globSync} from 'glob'


const require = createRequire(import.meta.url)

export default {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    'scope-enum': async (ctx) => {
      const pkgs = await getPackages(ctx)
      return [2, 'always', [...pkgs, 'pkg', 'plan']]
    }
  }
}

function getPackages(context) {
	return Promise.resolve()
		.then(() => {
			const ctx = context || {}
			const cwd = ctx.cwd || process.cwd()

			const {workspaces} = require(Path.join(cwd, 'package.json'))
			const wsGlobs = workspaces.flatMap(ws => globSync(Path.posix.join(ws, 'package.json'), {cwd, ignore: ['**/node_modules/**']}))

            return wsGlobs.map((pJson) => require(Path.join(cwd, pJson)));
		})
		.then((packages) => {
			return packages
				.map((pkg) => pkg.name)
				.filter(Boolean)
				.map((name) => (name.charAt(0) === '@' ? name.split('/')[1] : name));
		});
}
