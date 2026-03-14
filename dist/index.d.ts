import { QuartzTransformerPlugin } from '@quartz-community/types';
export { QuartzTransformerPlugin } from '@quartz-community/types';
import { SimpleSlug, TransformOptions } from '@quartz-community/utils';

interface CrawlLinksOptions {
    /** How to resolve Markdown paths */
    markdownLinkResolution: TransformOptions["strategy"];
    /** Strips folders from a link so that it looks nice */
    prettyLinks: boolean;
    openLinksInNewTab: boolean;
    lazyLoad: boolean;
    externalLinkIcon: boolean;
}
declare const CrawlLinks: QuartzTransformerPlugin<Partial<CrawlLinksOptions>>;
declare module "vfile" {
    interface DataMap {
        links: SimpleSlug[];
    }
}

export { CrawlLinks, type CrawlLinksOptions };
