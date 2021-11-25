function saturdayFun(activity = `roller-skate`){
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity2 = `go to the office`) {
  return `This Monday, I will ${activity2}.`
}

function wrapAdjective(wrap = `*`){
    function inner(adjective = `special`) {
      return `You are ${wrap}${adjective}${wrap}!`
    }
    return inner
}