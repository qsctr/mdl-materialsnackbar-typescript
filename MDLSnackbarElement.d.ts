/**
 * The MDL Snackbar element, should have HTML class mdl-js-snackbar.
 */
interface MDLSnackbarElement extends HTMLElement {

    /**
     * The JavaScript interface for the Snackbar MDL component.
     */
    MaterialSnackbar: MaterialSnackbar;

}

/**
 * The JavaScript interface for the Snackbar MDL component.
 */
declare class MaterialSnackbar {

    /**
     * Class constructor for Snackbar MDL component.
     * 
     * @param {HTMLElement} element The element that will be upgraded
     */
    constructor(element: HTMLElement);

    /**
     * Show the snackbar.
     */
    showSnackbar(data: MaterialToastData): void;
    showSnackbar(data: MaterialSnackbarData): void;

}

/**
 * The data for Snackbar MDL component without an action (toast).
 */
interface MaterialToastData {

    /**
     * The text message to display.
     */
    message: string;

    /**
     * The amount of time in milliseconds to show the snackbar. Default is 2750.
     */
    timeout?: number;

}

/**
 * The data for Snackbar MDL component with an action.
 */
interface MaterialSnackbarData extends MaterialToastData {

    /**
     * The function to execute when the action is clicked.
     */
    actionHandler?: (ev: MouseEvent) => any;

    /**
     * The text to display for the action button.
     */
    actionText: string;

}
