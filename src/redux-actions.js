export const updateNameAction = name => ({
  type: 'UPDATE_SQUAT',
  payload: name,
});

export const updateBenchAction = weight => ({
  type: 'UPDATE_BENCH',
  payload: weight
});

export const updateDeadAction = weight => ({
  type: 'UPDATE_DEAD',
  payload: weight
})

export const updateOHPAction = weight => ({
  type: "UPDATE_OHP",
  payload: weight
})


export const updateWeekAction = (weekindex) => ({
  type: "UPDATE_WEEK",
  payload: weekindex
})
