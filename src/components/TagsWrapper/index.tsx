// Core dependencies
import { useState } from 'react';

// Styling related imports
import { Container, Content } from './styles';
import { BiPlus, BiX} from 'react-icons/bi';

interface TagProps {
  name?: string;
  tagsSetter: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Tag({ name, tagsSetter, ...rest }: TagProps) {

  const [newTag, setNewTag] = useState<string>('');

  function handleRemoveTag(name: string) {
    tagsSetter(prevState => prevState.filter(item => item !== name));
  }

  function handleNewTagChange(event: any) {
    setNewTag(event.target.value);
  }

  function handleAddNewTag(name: string) {
    if (name) {
      tagsSetter(prevState => [...prevState, name]);
      setNewTag('');
    }
  }

  return (
    <Content className={name ? 'item' : 'new'}
     {...rest} >
      { name &&
        <>
          <span className='roboto-small-regular'>
            {name}
          </span> 
          <BiX size={18} onClick={() => handleRemoveTag(name)} />
        </> }
      { !name && 
        <>
          <input type='text'
            placeholder='Adicionar'
            className='roboto-small-regular'
            onChange={handleNewTagChange}
            value={newTag} />
          <BiPlus size={18} onClick={() => handleAddNewTag(newTag)} />
        </>
      }
    </Content>
  ); 
}

interface TagsWrapperProps {
  className: string;
  label: string;
  tags: string[];
  tagsSetter: React.Dispatch<React.SetStateAction<string[]>>;
}

export function TagsWrapper({ className, label,tags, tagsSetter }: TagsWrapperProps){

  return (
    <Container className={className}>
      <label htmlFor={label}
        className='roboto-small-regular' >
        {label}
      </label>
      <div className='tags-wrapper'>
        {tags && tags.map((item, index) => (
          <Tag key={index}
            name={item}
            tagsSetter={tagsSetter} />
        ))}
        <Tag tagsSetter={tagsSetter} /> 
      </div>
    </Container>
  );
}