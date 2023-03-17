import * as React from "react";
import "../index.css";

import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

export const config: TemplateConfig = {
  stream: {
    $id: "state",
    filter: {
      savedFilterIds: ["dm_banner-bank-directory_address_region"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "c_addressRegionDisplayName",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({document}) => {
  return `${document.id}`;
};

 export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: 'icon',
          type: 'image/x-icon',
          href: ''
        },
      }
    ],
  };
};

 const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta
}) => {
  const {
    _site,
    name,
    description,
    c_addressRegionDisplayName,
    dm_directoryParents,
    dm_directoryChildren
  } = document; 
  
  const childrenDivs = dm_directoryChildren && dm_directoryChildren.map((entity:any) => (
    <div>
      <a key="uRL" href={relativePrefixToRoot + entity.slug} className="font-bold text-2xl text-blue-700 hover:underline">
        {entity.name} 
      </a>
    </div>
  ));

  var updatedDescription;
  if (description.includes("United States")) {
    updatedDescription = description.replace("United States", "the United States");
  } else {
    updatedDescription = description;
  }
  return (
    <>     
        <div className="centered-container">         
          <div className="section space-y-14 px-10">
              <div className="space-y-6">
                  <h1 className="text-center">Turtlehead Tacos Locations - {c_addressRegionDisplayName}</h1>
                  <p className="text-2xl text-center">{updatedDescription}</p>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                  {childrenDivs}
              </div>
          </div>         
        </div>      
    </>
  );
};

export default State;