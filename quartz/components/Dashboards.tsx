import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { resolveRelative } from "../util/path"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"
import { QuartzPluginData } from "../plugins/vfile"

interface DashboardOptions {
  hideWhenEmpty: boolean
  title?: string
}

const defaultOptions: DashboardOptions = {
  hideWhenEmpty: true,
  title: "Dashboard",
}

export default ((opts?: Partial<DashboardOptions>) => {
  const options: DashboardOptions = { ...defaultOptions, ...opts }

  const Dashboards: QuartzComponent = ({ fileData, allFiles, displayClass, cfg }: QuartzComponentProps) => {
    const dashboardItems = allFiles.filter((file) => file.frontmatter?.tag === "dashboard")
    
    if (options.hideWhenEmpty && dashboardItems.length === 0) {
      return null
    }
    
    return (
      <div class={classNames(displayClass, "dashboard-listing")}> 
        <h3>{options.title}</h3>
        <ul class="overflow">
          {dashboardItems.length > 0 ? (
            dashboardItems.map((f) => (
              <li>
                <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                  {f.frontmatter?.title || "Untitled"}
                </a>
              </li>
            ))
          ) : (
            <li>{i18n(cfg.locale).components.dashboards.noItemsFound}</li>
          )}
        </ul>
      </div>
    )
  }

  Dashboards.css = style

  return Dashboards
}) satisfies QuartzComponentConstructor
