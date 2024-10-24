import { describe, expect, it } from 'vitest';
import {
    calculateCapitalGains,
    calculateCapGainsTax
} from '../../src/helpers/calculation';

describe ('calculateCapitalGainsTax', () => {

    it('should have no tax for bracket $18200 or less', () => {
        const result = calculateCapGainsTax(
            22500, 50000, 60000, 500, true
        );
        expect(result).toBe(0);
    })
});
