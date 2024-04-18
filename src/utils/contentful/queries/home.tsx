// MARK: Functionality
import ContentfulClient from "utils/contentful/client";

// MARK: Function
export default async (): Promise<any> => {
    const response = await ContentfulClient.getEntry("29NWlil9qKl7gMV65Mhzme");
    console.log("response: ", response)
    return response 
  }