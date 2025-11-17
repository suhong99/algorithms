// https://school.programmers.co.kr/learn/courses/30/lessons/42579/solution_groups?language=javascript

function solution(genres, plays) {
	const genreMap = {};

	// 1. 장르별 데이터 구성
	for (let i = 0; i < genres.length; i++) {
		const genre = genres[i];
		const play = plays[i];

		if (!genreMap[genre]) {
			genreMap[genre] = { total: 0, songs: [] };
		}

		genreMap[genre].total += play;
		genreMap[genre].songs.push([i, play]);
	}

	// 2. 장르를 총 재생수 기준 내림차순
	const sortedGenres = Object.entries(genreMap).sort((a, b) => b[1].total - a[1].total);

	const result = [];

	// 3. 각 장르별로 곡 정렬
	for (const [genre, info] of sortedGenres) {
		info.songs.sort((a, b) => {
			if (b[1] === a[1]) return a[0] - b[0];
			return b[1] - a[1];
		});

		result.push(info.songs[0][0]);
		if (info.songs[1]) result.push(info.songs[1][0]);
	}

	return result;
}
