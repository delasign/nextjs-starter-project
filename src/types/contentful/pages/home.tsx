// MARK: Types
import SEOImage from "types/contentful/seo/image"

// MARK: Type Definition
interface HomeEntry {
    fields: {
      metaTitle: string
      metaDescription: string
      seoImage: SEOImage
    }
  }

  export default HomeEntry