ZIP_FILE = ct-honeybee-chrome.zip

FILES = \
	COPYING \
	background.js \
	manifest.json \
	icons/ct-honeybee-128px.png \
	icons/ct-honeybee-16px.png \
	icons/ct-honeybee-19px.png \
	icons/ct-honeybee-32px.png \
	icons/ct-honeybee-38px.png \
	icons/ct-honeybee-48px.png \
	icons/ct-honeybee-cropped-16px.png \
	icons/ct-honeybee-cropped-19px.png

all: $(ZIP_FILE)

ct-honeybee-chrome.zip: $(FILES)
	rm -f $(ZIP_FILE)
	zip $@ $(FILES)

clean:
	rm -f $(ZIP_FILE)
