import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.DesktopOnly(Component.Footer({
    links: {
      Email: "mailto:gabriellimajacinto@gmail.com",
      GitHub: "https://github.com/gabrielljacinto",
      Kaggle: "https://www.kaggle.com/orion2342",
      Curriculum_Vitae: "https://gabrielljacinto.com/cv/",
      ORCID: "https://orcid.org/0000-0002-9258-8045",
      Lattes: "http://lattes.cnpq.br/7398702131851254",
      Goodreads: "https://www.goodreads.com/user/show/102268087",
      Letterboxd: "https://letterboxd.com/gabrielljacinto/",
      Musescore: "https://musescore.com/user/35849468",
      LinkedIn: "https://www.linkedin.com/in/gabriel-lima-jacinto/",
      Instagram: "https://www.instagram.com/gabriellimajacinto/",
    },
  }),
  )
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Writing",
        limit: 3,
        filter: (f) => f.slug!.startsWith("library/"),
        linkToMore: "library/" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    Component.Graph({
      localGraph: {
        showTags: true,
        fontSize: 1,
      },
      globalGraph: {
        showTags: true,
        repelForce: 0.6,
        fontSize: 1,

      },
    }),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
