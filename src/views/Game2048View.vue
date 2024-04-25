<template>
    <div class="container">
        <h1 class="title">2048</h1>
        <h2 class="title">得分: {{ this.score }}</h2>
        <h2 class="title" v-if="this.isGameOver">游戏结束</h2>
        
        <div class="numberbox_row" v-for="(row, i) in map" :key="i">
            <div class="numberbox" v-for="(col, j) in row" :key="j" :style="printColor(col)">{{ col }}</div>
        </div>
        <div class="controller">
            <NIcon 
                size="50"
                @click="moveTop"
                style="top:0; left:33.3%"
                >
                    <IosArrowUp />
            </NIcon>
            <NIcon 
                size="50"
                @click="moveLeft"
                style="left:0;top:33.3%"
                >
                    <IosArrowBack />
            </NIcon>
            <NIcon 
                size="50"
                @click="moveRight"
                style="left:66.7%;top:33.3%"
                >
                    <IosArrowForward />
            </NIcon>
            <NIcon 
                size="50"
                @click="moveBottom"
                style="left:33.3%;top:66.7%"
                >
                    <IosArrowDown />
            </NIcon>
        </div>
        <div class="SpecialController">
            <NIcon
            style="left:10%"
            size="50"
            @click="UndoLastStep"
            >
                <IosUndo />
            </NIcon>
            <NIcon
            style="right:10%"
            size="50"
            @click="reset"
            >
                <IosRefresh />
            </NIcon>
            <div>{{ this.undomsg }}</div>
        </div>
        <n-collapse>
            <n-collapse-item title="游戏说明" name="1">
            <div class="n-collapse-content">
                你可以点击上下左右按钮移动方块,或者使用键盘的WASD或者方向键进行操作<br/>
                右下角按钮或键盘Q键可以撤销上一步操作<br/>
                左下角按钮或键盘R键可以重置游戏<br/>
            </div>
            </n-collapse-item>
        </n-collapse>
    </div>

</template>
<style>
.container
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0;
    padding:0;
    height: 100%;
}
.title{
    text-align: center;
    font-weight: bold;
    margin: 6px;
}
h1.title
{
    font-size: 48px;
}
h2.title{
    font-size: 36px;
}
.numberbox_row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0;
}
.numberbox {
    width: 70px;
    height: 70px;
    line-height: 70px;
    background-color: #66ccff;
    text-align: center;
    padding:0;
    font-size: 36px;
    font-weight: bold;
    margin: 5px;
    float: left;
}
.container .controller
{
    margin: 30px,0;
    width:200px;
    height:200px;
    position: relative;
}
.container .controller .n-icon
{
    position: absolute;
    margin:0;
    padding:0;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    width:33.3%;
    height:33.3%;
    background-color: #66ccff70;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.container .controller .n-icon:hover
{
    background-color: #66ccffdd;
}
.container .SpecialController
{
    margin:20px,0;
    position: relative;
    width:100%;
    height:80px;

}
.container .SpecialController .n-icon
{
    margin:0;
    padding:0;
    position: absolute;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    width:80px;
    height:80px;
    background-color: #66ccff70;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.container .SpecialController .n-icon:hover
{
    background-color: #66ccffdd;
}
.n-collapse-item__header-main
{
    font-size: 20px;
}
.n-collapse-content
{
    font-size:16px;
}
@media (max-width: 768px) {
    .numberbox {
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
    }
    h1.title{
        font-size: 36px;
    }
    h2.title
    {
        font-size: 24px;
    }
    .container .controller
    {
        width:150px;
        height:150px;
        border-radius: 5px;
    }
    .container .SpecialController .n-icon
    {
        width:40px;
        height:40px;
        border-radius: 5px;

    }
}
</style>
<script>
import {NButton,NIcon,NCollapse,NCollapseItem} from 'naive-ui';
import {IosArrowBack,IosArrowDown,IosArrowForward,IosArrowUp,IosUndo,IosRefresh} from '@vicons/ionicons4';
import { IosCloudDownload } from '@vicons/ionicons4';
export default {
    components: 
    {
        NButton,
        NIcon,
        IosArrowBack,
        IosArrowDown,
        IosArrowForward,
        IosArrowUp,
        IosUndo,
        IosRefresh,
        NCollapse,
        NCollapseItem
    },
    data() 
    {
        return {
            n: 4,
            map: [],
            lastStep: [],
            SavedStep: [],
            lastScore: 0,
            SavedScore: 0,
            score: 0,
            steps: 0,
            isGameOver: false,
            prb: 0.8,//生成2的概率
            undomsg: ""
        }
    },
    methods: 
    {
        printColor(num)
        {
            if (num === "") return "background-color:#ffffffdd;";
            if (Number(num) > 8192 ) return "background-color:#9933ccdd;";
            let colors = {
                2: "#eee4dadd",
                4: "#ede0c8dd",
                8: "#f2b179dd",
                16: "#f59563dd",
                32: "#f67c5fdd",
                64: "#f65e3bdd",
                128: "#edcf72dd",
                256: "#edcc61dd",
                512: "#99cc00dd",
                1024: "#33b5e5dd",
                2048: "#0099ccdd",
                4096: "#aa66ccdd",
                8192: "#9933ccdd",
            }
            return `background-color:${colors[num]};`;
        },

        generateNumber() 
        {
            let x = Math.floor(Math.random() * this.n);
            let y = Math.floor(Math.random() * this.n);
            if (this.map[x][y] === "") {
                this.map[x][y] = Math.random() < this.prb ? 2 : 4;
            }
            else {
                this.generateNumber();
            }
        },
        UndoLastStep() 
        {
            if(this.map === this.SavedStep)
            {
                this.undomsg = "最多撤销1步喵~"
                return;
            }
            if(this.steps === 0)
            {
                this.undomsg = "没有可以撤销的步骤喵~"
                return;
            }
            this.map = this.SavedStep.map(subArray => [...subArray]);
            this.score = this.SavedScore;
            this.undomsg = "";
        },
        SaveLastStep() 
        {
            this.SavedStep = this.lastStep.map(subArray => [...subArray]);
            this.SavedScore = this.lastScore;
        },
        getLastStep()
        {
            this.lastStep = this.map.map(subArray => [...subArray]);
            this.lastScore = this.score;
        },
        reset() 
        {
            this.map = [];
            this.lastStep = [];
            for (let i = 0; i < this.n; i++) {
                this.map.push([]);
                this.lastStep.push([]);
                for (let j = 0; j < this.n; j++) {
                    this.map[i].push("");
                    this.lastStep[i].push("");
                }
            }
            this.generateNumber();
            this.generateNumber();
            this.score = 0;
            this.steps = 0;
            this.isGameOver = false;
        },
        checkGameOver() 
        {
            for (let i = 0; i < this.n; i++) {
                for (let j = 0; j < this.n; j++) {
                    if (this.map[i][j] === "") {
                        return false;
                    }
                    if (j < this.n - 1 && this.map[i][j] === this.map[i][j + 1]) {
                        return false;
                    }
                    if (i < this.n - 1 && this.map[i][j] === this.map[i + 1][j]) {
                        return false;
                    }
                }
            }
            return true;
        },
        moveLeft() 
        {
            this.getLastStep();
            let isMoved = false;
            for (let i = 0; i < this.n; ++i) 
            {
                for (let j = 1; j < this.n; ++j) 
                {
                    if (this.map[i][j] === "") continue;
                    let now = j;
                    let isMerge = false;
                    for(let k = j-1;k>=0;--k)
                    {
                        if(this.map[i][k] === "")
                        {
                            this.map[i][k] = this.map[i][now];
                            this.map[i][now] = "";
                            now = k;
                            isMoved = true;
                        }
                        else if(this.map[i][k] === this.map[i][now] && !isMerge)
                        {
                            this.map[i][k] *= 2;
                            this.score += this.map[i][k];
                            this.map[i][now] = "";
                            now = k;
                            isMerge = true;
                            isMoved = true;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
            if(isMoved)
            {
                this.steps++;
                this.SaveLastStep();
                this.generateNumber();
                this.isGameOver = this.checkGameOver();
            }
            
        }, 
        moveRight()
        {
            this.getLastStep();
            let isMoved = false;
            for (let i = 0; i < this.n; ++i) 
            {
                for (let j = this.n-2; j >= 0; --j) 
                {
                    if (this.map[i][j] === "") continue;
                    let now = j;
                    let isMerge = false;
                    for(let k = j+1;k<this.n;++k)
                    {
                        if(this.map[i][k] === "")
                        {
                            this.map[i][k] = this.map[i][now];
                            this.map[i][now] = "";
                            now = k;
                            isMoved = true;
                        }
                        else if(this.map[i][k] === this.map[i][now] && !isMerge)
                        {
                            this.map[i][k] *= 2;
                            this.score += this.map[i][k];
                            this.map[i][now] = "";
                            now = k;
                            isMerge = true;
                            isMoved = true;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
            if(isMoved)
            {
                this.steps++;
                this.SaveLastStep();
                this.generateNumber();
                this.isGameOver = this.checkGameOver();
            }
        },
        moveTop()
        {
            this.getLastStep();
            let isMoved = false;
            for (let j = 0; j < this.n; ++j) 
            {
                for (let i = 1; i < this.n; ++i) 
                {
                    if (this.map[i][j] === "") continue;
                    let now = i;
                    let isMerge = false;
                    for(let k = i-1;k>=0;--k)
                    {
                        if(this.map[k][j] === "")
                        {
                            this.map[k][j] = this.map[now][j];
                            this.map[now][j] = "";
                            now = k;
                            isMoved = true;
                        }
                        else if(this.map[k][j] === this.map[now][j] && !isMerge)
                        {
                            this.map[k][j] *= 2;
                            this.score += this.map[k][j];
                            this.map[now][j] = "";
                            now = k;
                            isMerge = true;
                            isMoved = true;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
            if(isMoved)
            {
                this.steps++;
                this.SaveLastStep();
                this.generateNumber();
                this.isGameOver = this.checkGameOver();
            }
        },
        moveBottom()
        {
            this.getLastStep();
            let isMoved = false;
            for (let j = 0; j < this.n; ++j) 
            {
                for (let i = this.n-2; i >= 0; --i) 
                {
                    if (this.map[i][j] === "") continue;
                    let now = i;
                    let isMerge = false;
                    for(let k = i+1;k<this.n;++k)
                    {
                        if(this.map[k][j] === "")
                        {
                            this.map[k][j] = this.map[now][j];
                            this.map[now][j] = "";
                            now = k;
                            isMoved = true;
                        }
                        else if(this.map[k][j] === this.map[now][j] && !isMerge)
                        {
                            this.map[k][j] *= 2;
                            this.score += this.map[k][j];
                            this.map[now][j] = "";
                            now = k;
                            isMerge = true;
                            isMoved = true;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
            if(isMoved)
            {
                this.steps++;
                this.SaveLastStep();
                this.generateNumber();
                this.isGameOver = this.checkGameOver();
            }
        },
        keyboardInput(event)
        {
            switch (event.key) 
            {
                case 'ArrowUp':
                    this.moveTop();
                    break;
                case 'w':
                    this.moveTop();
                    break;
                case 'ArrowDown':
                    this.moveBottom();
                    break;
                case 's':
                    this.moveBottom();
                    break;
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'a':
                    this.moveLeft();
                    break;
                case 'ArrowRight':
                    this.moveRight();
                    break;
                case 'd':
                    this.moveRight();
                    break;
                case 'q':
                    this.UndoLastStep();
                    break;
                case 'r':
                    this.reset();
                    break;
            }
        }
    },
    mounted() 
    {
        this.reset();
        document.addEventListener('keydown', this.keyboardInput);
    },
    unmounted()
    {
        document.removeEventListener('keydown', this.keyboardInput);
    }
}


</script>