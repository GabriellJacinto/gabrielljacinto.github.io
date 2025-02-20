import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"

export const Elite: QuartzTransformerPlugin = () => ({
  name: "Elite",
  markdownPlugins() {
    return [
      () => (tree: Root, _file) => {
        visit(tree, "code", (node) => {
          if (node.lang === "elite") {
            node.type = "html" as "code"
            node.value = `<pre class="elite">${node.value}</pre>`
          }
        })
      },
    ]
  },
})
