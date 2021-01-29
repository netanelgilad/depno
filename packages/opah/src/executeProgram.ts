import { Program } from '@babel/types';
import { getCodeFromExecutionProgram } from './getCodeFromExecutionProgram';

export function executeProgram(program: Program) {
  const requireResolve = require.resolve;
  const code = getCodeFromExecutionProgram(program, {
    "@opah/core": requireResolve('./c' + 'ore'),
    "@opah/host": requireResolve('./h' + 'ost'),
    "@opah/immutable": requireResolve('imm' + 'utable'),
  });
  return eval(code!);
}
