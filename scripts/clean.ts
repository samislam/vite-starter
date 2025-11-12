import { DelCli } from '@clscripts/del-cli'
import { runCommand } from '@clscripts/cl-common'

runCommand(
  new DelCli({
    files: ['**/{node_modules,*.tsbuildinfo,dist,.react-router}'],
  }).command
)
