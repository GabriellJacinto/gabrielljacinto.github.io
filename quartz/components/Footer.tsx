import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";
import style from "./styles/footer.scss";
import { version } from "../../package.json";
import { i18n } from "../i18n";

interface Options {
  links: Record<string, { url: string; icon: string }>;
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear();
    const links = opts?.links ?? [];
    
    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([label, { url, icon }]) => (
            <li>
              <a href={url} aria-label={label}>
                <i class={`${icon}`} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
        <p>© {year} Gabriel Lima Jacinto.{" "}
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
        </p>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
