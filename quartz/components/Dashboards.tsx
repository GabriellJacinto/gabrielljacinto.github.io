import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/dashboards.scss"
import { resolveRelative } from "../util/path"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

interface DashboardOptions {
  hideWhenEmpty: boolean
}

const defaultOptions: DashboardOptions = {
  hideWhenEmpty: true
}

export default ((opts?: Partial<DashboardOptions>) => {
  const options: DashboardOptions = { ...defaultOptions, ...opts }

  const Dashboards: QuartzComponent = ({ fileData, allFiles, displayClass, cfg }: QuartzComponentProps) => {
  const dashboardItems = allFiles.filter((file) => file.frontmatter?.tags?.includes("dashboard")).filter((file) => file.slug !== fileData.slug);  // Exclude the current dashboard
    
    if (options.hideWhenEmpty && dashboardItems.length === 0) {
      return null
    }
    
    return (
      <div class={classNames(displayClass, "dashboards")}> 
        <h3>{i18n(cfg.locale).components.dashboards.title}</h3>
        <ul class="overflow">
          {dashboardItems.length > 0 ? (
            dashboardItems.map((f) => (
              <li>
                <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                  {f.frontmatter?.title}
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
