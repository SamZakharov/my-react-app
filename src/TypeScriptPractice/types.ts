const ThisIsString: string = "Hello World!";

const ThisIsNumber: number = 1;

const ThisIsBoolean: boolean = true;

const ThisIsNull: null = null;

const ThisIsUndefined: undefined = undefined;

const ThisIsObject: object = { message: "Hello World!" };

const ThisIsAny: any = 1 + '1';

function ThisIsVoidFunction(): void {
    console.log("This is a void function");
}

function ThisIsNeverFunction(): never {
    throw new Error("This function never returns");
}

const ThisIsUnknown: unknown = "Hello World!";