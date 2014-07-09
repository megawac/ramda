var general = {
	/**
	 * Linear interpolation between two values
	 * @param value1
	 * @param value2
	 * @param ratio
	 * @returns {*}
	 */
	lerp : function(value1, value2, ratio) {
		"use strict";

		return ((value2 - value1) * this.limit(ratio, 0, 1)) + value1;
	},
	/**
	 * Limit a value to given bounds (aka clamp)
	 * @param value
	 * @param min
	 * @param max
	 * @returns {*}
	 */
	limit : function(value, min, max) {
		"use strict";

		if(min > max) {
			var bmin = max;
			max = min;
			min = bmin;
		}

		return this.max(this.min(value, max), min);
	},
	scale : function(value, min, max, dstMin, dstMax) {
		"use strict";

		value = (max === min ? 0 : (this.limit(value, min, max) - min) / (max - min));

		return value * (dstMax - dstMin) + dstMin;
	}
};

module.exports = general;