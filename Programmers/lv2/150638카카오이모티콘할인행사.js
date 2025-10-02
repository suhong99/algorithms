function solution(users, emoticons) {
	const discounts = [10, 20, 30, 40];
	let best = [0, 0];

	function dfs(idx, currentDiscounts) {
		if (idx === emoticons.length) {
			evaluate(currentDiscounts);
			return;
		}

		for (let d of discounts) {
			currentDiscounts.push(d);
			dfs(idx + 1, currentDiscounts);
			currentDiscounts.pop();
		}
	}

	// 현재 할인율 조합 평가
	function evaluate(discountRates) {
		let subscribers = 0;
		let sales = 0;

		for (let [minDiscount, maxPrice] of users) {
			let cost = 0;
			emoticons.forEach((price, idx) => {
				if (discountRates[idx] >= minDiscount) {
					cost += (price * (100 - discountRates[idx])) / 100;
				}
			});

			if (cost >= maxPrice) {
				subscribers++;
			} else {
				sales += cost;
			}
		}

		// 최적 해 갱신
		if (subscribers > best[0]) {
			best = [subscribers, sales];
		} else if (subscribers === best[0] && sales > best[1]) {
			best = [subscribers, sales];
		}
	}

	dfs(0, []);
	return best;
}
