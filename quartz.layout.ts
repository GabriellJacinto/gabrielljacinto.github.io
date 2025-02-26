import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

const socialLinks = {
  Email: { url: "mailto:gabriellimajacinto@gmail.com", icon: "fa fa-envelope" },
  Curriculum_Vitae: { url: "https://gabrielljacinto.com/cv/", icon: "fa fa-id-card" },
  GitHub: { url: "https://github.com/gabrielljacinto", icon: "fab fa-github" },
  Kaggle: { url: "https://www.kaggle.com/orion2342", icon: "fab fa-kaggle" },
  ORCID: { url: "https://orcid.org/0000-0002-9258-8045", icon: "fab fa-orcid" },
  Lattes: { url: "http://lattes.cnpq.br/7398702131851254", icon: "fa fa-location-dot" },
  Goodreads: { url: "https://www.goodreads.com/user/show/102268087", icon: "fab fa-goodreads" },
  Letterboxd: { url: "https://letterboxd.com/gabrielljacinto/", icon: "fab fa-letterboxd" },
  Musescore: { url: "https://musescore.com/user/35849468", icon: "fa fa-music" },
  LinkedIn: { url: "https://www.linkedin.com/in/gabriel-lima-jacinto/", icon: "fab fa-linkedin" },
  Instagram: { url: "https://www.instagram.com/gabriellimajacinto/", icon: "fab fa-instagram" },
  // Pinterest: { url: "https://br.pinterest.com/gabrielljacinto/", icon: "fab fa-pinterest" },
  // Codeforces: { url: "https://codeforces.com/profile/gabrielljacinto", icon: "fa fa-code" },
};

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.MobileOnly(
      Component.Footer({
        links: socialLinks,
        showMark: false,
        showSocials: true,
      }),
    ),
  ],
  afterBody: [],
  footer: Component.DesktopOnly(
    Component.Footer({
      links: socialLinks,
      showMark: true,
      showSocials: true,
    }),
  ),
};



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

export const dashboardContentPageLayout: PageLayout = {
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
    Component.Dashboards({
      title: "Dashboards",
    }),
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
