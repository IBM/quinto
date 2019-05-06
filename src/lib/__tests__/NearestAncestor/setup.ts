import NearestAncestor, { INearestAncestorProps } from '../../NearestAncestor';

function setup({
  html,
  props,
  selector,
  result,
  cache
}: {
  html: string;
  props: INearestAncestorProps;
  selector: string;
  result: {
    data: null | object;
    depth: number;
    element: null | string;
  };
  cache: null | string;
}) {
  document.body.innerHTML = html;

  const nearestAncestor = new NearestAncestor(props);
  const ancestor = nearestAncestor.find(document.querySelector(
    selector
  ) as HTMLElement);

  expect(ancestor.data).toEqual(result.data);
  expect(ancestor.depth).toEqual(result.depth);

  if (result.element == null) {
    expect(ancestor.element).toEqual(null);
  } else {
    expect(ancestor.element.outerHTML.replace(/"/g, "'")).toEqual(
      result.element
    );
  }

  if (cache != null) {
    expect((nearestAncestor as $Override).cache.hasOwnProperty(cache)).toEqual(
      true
    );
  }

  if (ancestor.data == null) {
    expect(
      (nearestAncestor as $Override).cache.hasOwnProperty(cache)
    ).not.toEqual(true);
  }
}

export { setup };
