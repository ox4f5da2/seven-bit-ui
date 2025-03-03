import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbTable from '../sbTable.vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Salary',
    dataIndex: 'salary'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    ellipsis: true,
    width: '100px'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
];
const data = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London11111111111111111111111111111111111111111111111111111111111',
    email: 'jane.doe@example.com'
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com'
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  }
];
const rowSelection = {
  type: 'checkbox',
  showCheckedAll: true
};
// The component to test
describe('test sbTable', () => {
  ['mini', 'small', 'medium', 'large'].forEach(size => {
    it(`sbTable size class test ${size}`, () => {
      const wrapper = mount(sbTable, {
        props: {
          size
        }
      });
      expect(wrapper.classes()).toContain(`sb-table-size-${size}`);
    });
  });
  it('columns', async () => {
    const wrapper = mount(sbTable, {
      props: {
        columns: columns,
        data,
        rowSelection
      }
    });

    await wrapper.find('#checkall').setValue(true);
    expect(wrapper.findAll('.sb-checkbox-checked').length == data.length + 1).toBe(true);
    await wrapper.find('#checkall').setValue(false);
    expect(wrapper.findAll('.sb-checkbox-checked').length == 0).toBe(true);
  });
  it('ifAllChecked test', async () => {
    const wrapper = mount(sbTable, {
      props: {
        columns: columns,
        data,
        rowSelection
      }
    });
    await wrapper.findAll('input[type="checkbox"]')[1].setValue(true);
    expect(wrapper.findAll('.sb-checkbox-indeterminate').length == 1).toBe(true);
  });
  it('empty slot', () => {
    const wrapper = mount(sbTable, {
      slots: {
        empty: 'kif'
      }
    });
    expect(wrapper.html().indexOf('kif') !== -1).toBe(true);
  });
});
