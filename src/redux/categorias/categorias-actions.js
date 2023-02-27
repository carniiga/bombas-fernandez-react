export const SELECT_CATEGORY = "SELECT_CATEGORY";

export const selectCategory = category => ({
    //recibe una categoria para luego utilizarlo en el reducer.
    type: SELECT_CATEGORY,
    payload :  category ,
});