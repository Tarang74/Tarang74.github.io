import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.paths.json';

// Sync object
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',

    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/'
    })
};

export default config;
