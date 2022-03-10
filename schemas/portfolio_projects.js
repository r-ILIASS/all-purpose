export default {
  name: "portfolio_projects",
  title: "Portfolio Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "source",
      title: "Source",
      type: "string",
    },
    {
      name: "live",
      title: "Live",
      type: "string",
    },
  ],
};
