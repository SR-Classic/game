/*
===========================================================================

credential-hints.ts - which mirrored text edits a password manager may use

The bridge mirrors every text edit as a real input, so password managers
see them all. Only the title screen's login edits may be saved or filled;
every other edit is marked for the managers to leave alone.

===========================================================================
*/

// The title screen's login edits, the only controls a password manager may
// save or fill. Value is the autocomplete token that identifies the field.
const LOGIN_AUTOCOMPLETE: Readonly<Record<string, string>> = {
	account: "username",
	password: "current-password"
};

// Declared on every edit that is not a login edit. A one-time code is a
// recognised field type, so the browser stops guessing from the label, and
// it has nothing saved to offer for it.
const NON_FILLABLE_AUTOCOMPLETE = "one-time-code";

/*
================
configureCredentialHints

Password managers ignore autocomplete="off", so every other edit (stat-point
inputs and the like) carries the vendor opt-outs for 1Password, LastPass,
Bitwarden and Dashlane; otherwise clicking one offers to save a login.

Chrome's address autofill ignores "off" as well: it reads the edit's label
("Name", "ID") and offers the player's saved e-mail and address in every
game edit. It only stands down when the page declares a field type that is
not an address, so these edits declare the one type no game edit can be
mistaken for (NON_FILLABLE_AUTOCOMPLETE).
================
*/
export function configureCredentialHints( element: HTMLInputElement, id: string ): void {
	const token = LOGIN_AUTOCOMPLETE[id];
	if ( token ) {
		element.autocomplete = token as AutoFill;
		return;
	}
	element.autocomplete = NON_FILLABLE_AUTOCOMPLETE;
	element.setAttribute( "data-1p-ignore", "true" );
	element.setAttribute( "data-lpignore", "true" );
	element.setAttribute( "data-bwignore", "true" );
	element.setAttribute( "data-form-type", "other" );
}
