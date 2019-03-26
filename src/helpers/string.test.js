import { capitalize } from './string';

describe('src/helpers/string.js', () => {
    describe('capitalize', () => {
        it('should work correctly', () => {
            expect(capitalize('иванов')).toBe('Иванов');
        });
    });
});
