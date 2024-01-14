interface Image {
  id: string;
  previewURL: string;
  name: string;
  alt: string;
  uploaded: string;
  isPrivate: boolean;
  downloadCount: number;
}

interface ImageMetadata {
  id: string;
  previewURLBase: string;
  name: string;
  alt: string;
  uploaded: string;
  isPrivate: boolean;
  downloadCounterId: string;
}

interface Setup {
  apiToken: string;
  accountId: string;
  imagesKey: string;
}

/*** Will be in @cloudflare/workers-types shortly ***/

type Params<P extends string = any> = Record<P, string | string[]>;

type EventContext<Env, P extends string, Data> = {
  request: Request;
  waitUntil: (promise: Promise<any>) => void;
  next: (input?: RequestInfo, init?: RequestInit) => Promise<Response>;
  env: Env;
  params: Params<P>;
  data: Data;
};

declare type PagesFunction<
  Env = unknown,
  Params extends string = any,
  Data extends Record<string, unknown> = Record<string, unknown>
> = (context: EventContext<Env, Params, Data>) => Response | Promise<Response>;

export interface Root {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: Result[];
}

export interface Result {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: Multimedum[];
  short_url: string;
}

export interface Multimedum {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}
