type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (ActiveMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(ActiveMenu !== '') {
        returnObject[ActiveMenu] = true;
    }
    return returnObject;
}