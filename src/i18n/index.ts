import { createI18n } from "vue-i18n";

const messages = {
  pt: {
    message: {
      hello: "olá mundo",
    },
  },
  en: {
    message: {
      hello: "hello world",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
};

function i18nBuilder(props: { lang: string }) {
  let locale = "en";
  try {
    locale = props["lang"];
  } catch(err) {
    //
  }

  return createI18n({
    locale: locale, // set locale
    fallbackLocale: "en", // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  });

}

export { i18nBuilder };
