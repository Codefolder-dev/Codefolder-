// utils/runCode.ts
export const runJavaScriptCode = (code: string) => {
  return new Promise<string>((resolve, reject) => {
    let result = '';

    // Create a custom console object to capture output
    const customConsole = {
      log: (...args: any[]) => {
        result += args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ') + '\n';
      },
      error: (...args: any[]) => {
        result += `Error: ${args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ')}\n`;
      },
      warn: (...args: any[]) => {
        result += `Warning: ${args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ')}\n`;
      },
      info: (...args: any[]) => {
        result += `Info: ${args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ')}\n`;
      },
    };

    try {
      // Create a new function with custom console
      const func = new Function('console', code);
      func(customConsole);
      resolve(result);
    } catch (error) {
      resolve(`Error: ${(error as Error).message}`);
    }
  });
};
