// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,         // чтобы не импортировать describe/it/expect
        environment: 'node',   // если не тестируешь DOM
    },
});
