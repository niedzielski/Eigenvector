<?php

namespace Eigenvector;

use OutputPage;
use SkinTemplate;
use SkinEigenvector;

/**
 * Hook handlers for Eigenvector skin.
 *
 * Hook handler method names should be in the form of:
 *	on<HookName>()
 */
class Hooks {
	/**
	 * BeforePageDisplayMobile hook handler
	 *
	 * Make Eigenvector responsive when operating in mobile mode (useformat=mobile)
	 *
	 * @see https://www.mediawiki.org/wiki/Extension:MobileFrontend/BeforePageDisplayMobile
	 * @param OutputPage $out
	 * @param SkinTemplate $sk
	 */
	public static function onBeforePageDisplayMobile( OutputPage $out, $sk ) {
		// This makes Eigenvector behave in responsive mode when MobileFrontend is installed
		if ( $sk instanceof SkinEigenvector ) {
			$sk->enableResponsiveMode();
		}
	}
}
