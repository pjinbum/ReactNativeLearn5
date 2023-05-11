import React from 'react' ;
import styled from 'styled-components/native' ;
// import { Connect, connect } from 'react-redux';
import { connect } from 'react-redux';
import { Component } from 'react';
import { removeHouse, selectHouse } from '../Action';

const Box = styled.View`
 flex:1;
 justify-content: center;
 align-items: center;
 border-bottom: 1px solid #888;
`;


const TitleArea = styled.View`
 height: 50px;
 width: 300px;
 padding: 10px 20px;
 border-bottom: 2px solid 86E57F  ;
`;

const DetailView = styled.View`
flex-direction: row;
padding: 20px;
`;

const Title = styled.Text`
 font-size: 20px;
 font-weight: 700;
 text-align: center;
`;

const List = styled.ScrollView`
 padding: 10px 0px;
`;

const ItemText = styled.Text`
 font-size: 18px;
 padding: 0px 5px;
 border: 1px solid skyblue;
`;






class History extends Component {

    removeHouse=(house)=>{
        this.props.dispatchRemoveHouse(house)
    }

    selectHouse=(house)=>{
        this.props.dispatchSelectHouse(house)
    }


    render(){
       const {houses} = this.props;
        return(
            <Box>
     
                <TitleArea>
                    <Title>가계부</Title>
                </TitleArea>
                <List> 



                    {

                        houses.map((house,index) => (
                            <DetailView key={index}>
                                <ItemText style={{width:50}}>{house.division}</ItemText>
                                <ItemText numberOfLines={1} ellipsizeMode='clip' style={{width:40,paddingRight:5}}>{house.money}</ItemText>
                                <ItemText numberOfLines={1} ellipsizeMode='clip' style={{width:40,paddingRight:5}}>{house.detail}</ItemText>
                                {/* 글씨 짤리게 해준거임 */}
                                <ItemText numberOfLines={1} ellipsizeMode='clip' style={{width:40,paddingRight:5}}>{house.kind}</ItemText>
                                <ItemText style={{width:110}}>{house.regDate}</ItemText>
                                <ItemText style={{width:50}} onPress={ ()=> this.removeHouse(house)}>삭제</ItemText>
                                <ItemText style={{width:50}} onPress={ ()=> this.selectHouse(house)}>수정</ItemText>
                                
                            </DetailView>
                        ))
                    }
                </List>
            </Box>


        )
    }
}


const mapStateToProps = (state) => ({
    update: state.HouseReducer.update,
    houses : state.HouseReducer.houses,
    idx: state.HouseReducer.idx,
})


const mapDispatchToProps = {
    dispatchRemoveHouse:(house) => removeHouse(house),
    dispatchSelectHouse:(house) => selectHouse(house)
}

export default connect(mapStateToProps, mapDispatchToProps)(History)