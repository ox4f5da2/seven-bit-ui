import type { ExtractPropTypes } from 'vue';

export const AlertType = ['info', 'success', 'warning', 'error'];

export const alertProps = {
  visible: Boolean,
  type: {
    type: String,
    validator(value: string) {
      return AlertType.includes(value);
    },
    default: 'info'
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: true
  },
  title: String,
  banner: {
    type: Boolean,
    default: false
  },
  iconType: {
    type: String,
    validator: (type: string) => AlertIconType.includes(type),
    default: 'none'
  }
};

export type AlertProps = ExtractPropTypes<typeof alertProps>;

export const AlertIconType = ['info', 'success', 'warning', 'error', 'none'];
