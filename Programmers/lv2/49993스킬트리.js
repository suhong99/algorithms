//https://school.programmers.co.kr/learn/courses/30/lessons/49993#fnref1
function solution(skill, skill_trees) {
  const skillIndex = skill.split('');
  let count = 0;
  skill_trees.forEach((skillTree) => {
    if (check(skillTree)) {
      count++;
    }
  });

  function check(skillTree) {
    let step = 0;
    for (let i = 0; i < skillTree.length; i++) {
      const skillStep = skillIndex.findIndex((e) => e === skillTree[i]);
      if (skillStep === -1) continue;
      if (skillStep > step) {
        return false;
      } else {
        step++;
      }
    }
    return true;
  }
  return count;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
