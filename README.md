# Vanilla Redux

1. createAction -> 자동적으로 Action 생성
2. createReducer -> switch X, 새로운 상태 retrun 또는 기존 상태 mutate(redux toolkit 뒤에 immer.js가 뒤에서 작동중이기 때문에 가능)
3. configureStore
4. createSlice -> 캡슐화, 상태 mutate 가능