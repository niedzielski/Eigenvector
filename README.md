Eigenvector Skin
========================

Hack
----

cd core/skins
git clone https://github.com/niedzielski/Eigenvector.git

sudo apt install php-dev

# Follow v8 instructions on https://github.com/phpv8/v8js/blob/php7/README.Linux.md#compile-v8-56-and-newer-using-gn. I used the latest stable tag, 7.6.303.29, via https://omahaproxy.appspot.com/ but that didn't work. Found a related bug, https://github.com/phpv8/v8js/issues/418, and used 7.5.289.

cd ..
sudo mkdir -p /opt/v8/lib
sudo cp v8/out.gn/x64.release/{lib*.so,*_blob.bin,icudtl.dat} ~/opt/v8/lib/
sudo cp -a v8/include ~/opt/v8/

# Follow https://github.com/phpv8/v8js/blob/php7/README.Linux.md#compile-php-v8js-itself. I used the latest stable tag, 2.1.1, via https://pecl.php.net/package/v8js. I had to do the patchelf steps prior to building v8js.


docker exec -it boxwiki_mediawiki_1 bash
php -i |grep extension_dir
cp /var/www/html/skins/Eigenvector/v8js/modules/v8js.so /usr/local/lib/php/extensions/no-debug-non-zts-20170718/
cp /var/www/html/skins/Eigenvector/v8/out.gn/x64.release/*.so /usr/local/lib/php/extensions/no-debug-non-zts-20170718/
php -i | grep 'Configuration File'
vim /usr/local/etc/php/php.ini
Add extension=v8js.so
vim /etc/ld.so.conf.d/v8.conf
Add /opt/v8/lib
ldconfig
reboot docker
https://gerrit.wikimedia.org/r/#/c/mediawiki/extensions/Flow/+/398523/

Configuration options
---------------------

### $wgEigenvectorPrintLogo

Logo used in print styles. Keys are `url`, `width`, and `height` (in
pixels). Note that this solution only works correctly if the image
pointed to by `url` is an SVG that does not specify width and height
attributes, or its width and height match the corresponding variables
below. Alternatively, a PNG or other type of image can be used, but
its dimensions also need to match the corresponding variable below.
That in turn may result in blurry images, though.

The URL can be absolute or relative.

Example configuration:

	$wgEigenvectorPrintLogo = [
		'url' => 'https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg',
		'width' => 174,
		'height' => 27
	];

* Type: `Array`
* Default: `false`
