const { execSync } = require('child_process')
const { version } = require('../manifest.json')

const existingTags = execSync('git tag', { encoding: 'utf-8' });
if (existingTags.includes(`v${version}`)) {
  console.log(`Tag v${version} already exists. Update version!`);
  process.exit(0);
}

const cmd = [
  `git add .`,
  `git commit -m "Release version ${version}"`,
  `git tag v${version}`,
  `git push`,
  `git push origin v${version}`
]

cmd.map(
  command => execSync(command, { stdio: 'inherit' })
)

console.log(`Released version ${version} successfully!`);
