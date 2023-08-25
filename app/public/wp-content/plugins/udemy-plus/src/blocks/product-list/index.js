import { registerBlockType } from '@wordpress/blocks'
import { 
  useBlockProps, 
  InspectorControls, 
  RichText
} from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import { 
  PanelBody,
  QueryControls 
} from '@wordpress/components'
import {useSelect} from '@wordpress/data'
import { RawHTML } from '@wordpress/element'
import icons from '../../icons.js'
import './main.css'

registerBlockType('udemy-plus/product-list', {
  icon: {
    src: icons.primary
  },
	edit({ attributes, setAttributes }) {
    const { title, count, categories } = attributes
    const blockProps = useBlockProps()

    const terms = useSelect((select) => {
      return select('core').getEntityRecords(
        'taxonomy',
        'category',
        {
          per_page: -1
        }
      );
    });
    const suggestions = {};

    terms?.forEach((term) => {
      suggestions[term.name] = term;
    });

    const categoryIDs = categories.map((term) => term.id);
    const posts = useSelect(
      (select) => {
        return select('core').getEntityRecords('postType', 'recipe', {
          per_page: count,
          _embed: true,
          category : categoryIDs,
          order: 'desc',
        });
    },
    [count,categoryIDs] // variable watch
    );


    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Settings', 'udemy-plus')}>
            <QueryControls 
              numberOfItems={count}
              minItems={1}
              maxItems={10}
              onNumberOfItemsChange={count => setAttributes({ count })}
              categorySuggestions = {suggestions}
              onCategoryChange={(newTerms) => {
                const newCategories = []
                newTerms.forEach((category) => {
                  if(typeof category === 'object'){
                    return newCategories.push(category);
                  }

                  const categoryTerm = terms?.find(
                    (term) => term.name === category
                  );

                  if(categoryTerm) newCategories.push(categoryTerm);
                });

                setAttributes({categories: newCategories});
              }}
              selectedCategories= {categories }
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <RichText
            tagName="h6"
            value={ title }
            withoutInteractiveFormatting
            onChange={ title => setAttributes({ title }) }
            placeholder={ __('Title', 'udemy-plus') }
          />
          
          {

            posts?.map((post) => {
              const featuredImage = 
                post._embedded && 
                post._embedded['wp:featuredmedia'] &&
                post._embedded['wp:featuredmedia'].length > 0 &&
               
                post._embedded['wp:featuredmedia'][0];
              
              return (
                <div class="single-post">
                  {featuredImage && (
                    <a class="single-post-image" href={post.link}>
                      <img 
                        src={featuredImage.media_details.sizes.thumbnail.source_url} 
                        alt={featuredImage.alt_text} />
                    </a>
                  )}

                  <div class="single-post-detail">
                    <a href={post.link}>
                      <RawHTML>{post.title.rendered}</RawHTML>
                    </a>
                    <span>
                      by <a href={post.link}>{post._embedded.author[0].name}</a>
                    </span>
                  </div>
                </div>
              )
            })
          }

        </div>
      </>
    );
  }
});