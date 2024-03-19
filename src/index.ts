interface Doc {
  cookie?: string;
}

interface Options {
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
}

interface Cookie {
  get: (key: string) => string | undefined;
  set: (key: string, value: string, opts?: Options) => string;
}

const cookieModule: (doc?: Doc | string) => Cookie = function (
  doc: Doc | string | Document = document
) {
  if (typeof doc === "string") doc = { cookie: doc };
  if (!doc.cookie) doc.cookie = "";

  const self: Cookie = {
    get: function (key: string) {
      const splat = doc!.cookie!.split(/;\s*/);
      for (let i = 0; i < splat.length; i++) {
        const ps = splat[i].split("=");
        const k = decodeURIComponent(ps[0].trim());
        if (k === key) return decodeURIComponent(ps[1].trim());
      }
      return undefined;
    },

    set: function (key: string, value: string, opts?: Options) {
      opts = Object.assign({}, opts);
      let s = encodeURIComponent(key) + "=" + encodeURIComponent(value);
      if (opts.expires) s += "; expires=" + opts.expires.toUTCString();
      if (opts.path) s += "; path=" + encodeURIComponent(opts.path);
      if (opts.domain) s += "; domain=" + encodeURIComponent(opts.domain);
      if (opts.secure) s += "; secure";
      doc.cookie = s;
      return s;
    },
  };
  return self;
};

const exportedModule = cookieModule();

export const { get, set } = exportedModule;

export default cookieModule;
