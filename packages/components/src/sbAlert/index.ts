import Alert from './sbAlert.vue';

const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbAlert = withInstall(Alert);
export default sbAlert;
