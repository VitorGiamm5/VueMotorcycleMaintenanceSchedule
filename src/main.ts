import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import router from './router';

// import 'primevue/resources/themes/saga-blue/theme.css'; // ou qualquer outro tema de sua escolha
import 'primeicons/primeicons.css';
import './assets/main.css';

// Importando todos os componentes do PrimeVue
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressSpinner from 'primevue/progressspinner';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';
import Message from 'primevue/message';
import Tooltip from 'primevue/tooltip';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Chip from 'primevue/chip';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Sidebar from 'primevue/sidebar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Steps from 'primevue/steps';
import Timeline from 'primevue/timeline';
import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import Galleria from 'primevue/galleria';
import Carousel from 'primevue/carousel';
import Paginator from 'primevue/paginator';
import DataView from 'primevue/dataview';
import OrderList from 'primevue/orderlist';
import PickList from 'primevue/picklist';
import Listbox from 'primevue/listbox';
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import ToggleButton from 'primevue/togglebutton';
import Slider from 'primevue/slider';
import Rating from 'primevue/rating';
import ColorPicker from 'primevue/colorpicker';
import Knob from 'primevue/knob';
import ProgressBar from 'primevue/progressbar';
import Inplace from 'primevue/inplace';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import BlockUI from 'primevue/blockui';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import OverlayPanel from 'primevue/overlaypanel';

import BadgeDirective from 'primevue/badgedirective';
import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);
app.use(router);

// Registrando todos os componentes do PrimeVue
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Toast', Toast);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);
app.component('InputNumber', InputNumber);
app.component('Textarea', Textarea);
app.component('FileUpload', FileUpload);
app.component('Toolbar', Toolbar);
app.component('Card', Card);
app.component('Message', Message);
app.component('Badge', Badge);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('Chip', Chip);
app.component('Divider', Divider);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Sidebar', Sidebar);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Steps', Steps);
app.component('Timeline', Timeline);
app.component('Tree', Tree);
app.component('TreeTable', TreeTable);
app.component('Galleria', Galleria);
app.component('Carousel', Carousel);
app.component('Paginator', Paginator);
app.component('DataView', DataView);
app.component('OrderList', OrderList);
app.component('PickList', PickList);
app.component('Listbox', Listbox);
app.component('MultiSelect', MultiSelect);
app.component('SelectButton', SelectButton);
app.component('ToggleButton', ToggleButton);
app.component('Slider', Slider);
app.component('Rating', Rating);
app.component('ColorPicker', ColorPicker);
app.component('Knob', Knob);
app.component('ProgressBar', ProgressBar);
app.component('Inplace', Inplace);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('Skeleton', Skeleton);
app.component('Tag', Tag);
app.component('Terminal', Terminal);
app.component('BlockUI', BlockUI);
app.component('DynamicDialog', DynamicDialog);
app.component('Fieldset', Fieldset);
app.component('Panel', Panel);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('ConfirmDialog', ConfirmDialog);
app.component('OverlayPanel', OverlayPanel);
app.component('Sidebar', Sidebar);

// Registrando diretivas do PrimeVue
app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('styleclass', StyleClass);
app.directive('ripple', Ripple);

app.mount('#app');