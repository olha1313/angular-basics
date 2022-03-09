import { countries } from './countries';

describe('countries', () => {
	it('should contain countries codes', () => {
		const result = countries();
		expect(result).toContain('ua');
		expect(result).toContain('uk');
		expect(result).toContain('us');
	})
})
