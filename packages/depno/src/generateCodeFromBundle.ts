import generate from '@babel/generator';
import { expressionStatement, program, Statement } from '@babel/types';
import { ExecutionBundle } from '.';

export async function generateCodeFromBundle(bundle: ExecutionBundle) {
  const executionProgram = program(
    (Array.from(bundle.definitions.values()) as Statement[]).concat([
      expressionStatement(bundle.expression),
    ])
  );

  const { code } = (await generate(executionProgram, undefined, {
    filename: 'a.ts',
  }))!;

  return code!;
}
