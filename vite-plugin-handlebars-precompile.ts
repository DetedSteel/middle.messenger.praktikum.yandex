import { PluginOption } from 'vite';
import Handlebars from 'handlebars';

export default function handlebarsPrecompile(): PluginOption {
  return {
    name: 'vite-plugin-handlebars-precompile',
    transform(src, id) {
      if (!(id.endsWith('.hbs') || id.endsWith('.handlebars'))) {
        return;
      }

      return {
        code: `
            import Handlebars from 'handlebars';
        
            export default Handlebars.template(${Handlebars.precompile(src)});    
        `,
      };
    },
  };
}
