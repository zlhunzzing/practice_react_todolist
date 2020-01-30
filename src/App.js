import React from 'react';
import Menu from './Menu';
import ListView from './ListView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.ListId = 0
    this.ListName = "ListName"
    this.targetList = ""
    this.NewLists = []
    this.state = {
      Lists: [{
        ListId:0,
        ListName:"ListName",

        Todos:[{ id:0, completed:false, Content:"밥먹기" },
        { id:1, completed:false, Content:"잠자기" }
      ]
      }]
    }
  }

  HandleAddListName(e) {
    this.ListName = e.target.value
  }
  AddList() {
    const Lists = this.state.Lists
    this.ListId++
    this.setState({
      Lists: Lists.concat({
        ListId:this.ListId, ListName:this.ListName,
        Todos:[{ id:0, completed:false, Content:"숨쉬기" },
      ]
      })
    })
  }
  HandleDeleteListId(target) {
    this.targetList = target
    this.DeleteList()
  }
  DeleteList() {
    const Lists = this.state.Lists
    for(let List=0; List<Lists.length; List++) {
      if(Lists[List].ListId+Lists[List].ListName === this.targetList) {
        this.NewLists = Lists.slice(0,List).concat(Lists.slice(List+1,Lists.length))

        this.setState({
          Lists: this.NewLists
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Menu
        Data={this.state}
        AddList={this.AddList.bind(this)}
        HandleAddListName={this.HandleAddListName.bind(this)}
        HandleDeleteListId={this.HandleDeleteListId.bind(this)}
        ></Menu>
        <ListView
        Data={this.state}
        ></ListView>
      </div>
    );
  }
}

export default App;