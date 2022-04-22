import React, { useState, useEffect, useRef } from 'react';
import { Input,  Form } from 'antd';
import 'moment/dist/locale/vi';
import moment from 'moment';
import './editTableCell.scss'

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  isTime,
  handleSave,
  form,
  componentInput,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  
  
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };


  const save = async () => {
    if(form){
      const values = await form.validateFields();
      if(isTime) {
        values.customerRecordCheckExpiredDate = moment(values.customerRecordCheckExpiredDate, "DD/MM/YYYY").format('DD/MM/YYYY')
      }
      const isUpdated = handleSave({ 
        ...record, 
        ...values
      });
      if(isUpdated) {
        toggleEdit()
      }
    }
  };

  let childNode = children;
  
  if(children && typeof children[1] === 'string') {
    if(children[1].split('/').length === 3) {
      form.setFieldsValue({
        customerRecordCheckExpiredDate: moment(children, 'DD/MM/YYYY')
      })
    }
  }

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
      >
        {
          componentInput ? componentInput(inputRef, save) : <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        }
      </Form.Item>
    ) : (
      <div
        className={`editable-cell-value-wrap ${!record[dataIndex] ? 'editable-cell__wrap_null' : 'editable-cell__wrap'}` }
        style={{
          paddingRight: 24
        }}
        onClick={() => {
          toggleEdit()
        }}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default EditableCell