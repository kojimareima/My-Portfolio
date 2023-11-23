"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Image,
  Link,
} from "@nextui-org/react";
import Rating from "./Rating";

const Skill = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold mb-4">Skills</div>
      <Card className="mb-4">
        <CardHeader className="flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl mt-5">ソフトウェア</div>
          <div className="mt-3">
            最近はライノセラスの勉強をし始めました。
          </div>
        </CardHeader>
        <CardBody>
          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>ソフトウェア</TableColumn>
              <TableColumn>経験年数</TableColumn>
              <TableColumn>用途</TableColumn>
              <TableColumn>レベル</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className="flex items-center">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Jw-cad</span>
                </TableCell>
                <TableCell>5年</TableCell>
                <TableCell>図面作成</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="flex items-center">
                  <Link href="https://www.typescriptlang.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                      alt="typescript"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Archicad</span>
                </TableCell>
                <TableCell>3年</TableCell>
                <TableCell>設計全般</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="flex items-center">
                  <Link href="https://soliditylang.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg"
                      alt="solidity"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Adobe Photoshop</span>
                </TableCell>
                <TableCell>1年6ヶ月</TableCell>
                <TableCell>パース加工</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="flex items-center">
                  <Link href="https://www.python.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                      alt="python"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Adobe Illustrator</span>
                </TableCell>
                <TableCell>1年6ヶ月</TableCell>
                <TableCell>紙面作成</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell className="flex items-center">
                  <Link href="https://www.ruby-lang.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
                      alt="ruby"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">SketchUP</span>
                </TableCell>
                <TableCell>3年6か月</TableCell>
                <TableCell>3D作成</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell className="flex items-center">
                  <Link
                    href="https://www.iso.org/standard/74528.html"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                      alt="c-lang"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Rhinoceros</span>
                </TableCell>
                <TableCell>2か月</TableCell>
                <TableCell>設計全般</TableCell>
                <TableCell>
                  <Rating value={1} />
                </TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell className="flex items-center">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Twinmotion</span>
                </TableCell>
                <TableCell>1年</TableCell>
                <TableCell>パース作成</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="8">
                <TableCell className="flex items-center">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Microsoft Word</span>
                </TableCell>
                <TableCell>中学生から</TableCell>
                <TableCell>レポート作成、文章作成</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
              <TableRow key="9">
                <TableCell className="flex items-center">
                  <Link href="https://www.python.org/" isExternal>
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
                      alt="python"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Micro Excel</span>
                </TableCell>
                <TableCell>中学生から</TableCell>
                <TableCell>表、グラフの作成</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="10">
                <TableCell className="flex items-center">
                  <Link
                    href="https://www.iso.org/standard/74528.html"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                      alt="c-lang"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Micro PowerPoint</span>
                </TableCell>
                <TableCell>中学生から</TableCell>
                <TableCell>資料作成</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader className="flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl mt-5">
            資格及びコンペ経歴
          </div>
          <div className="mt-3">
            今迄に取り組んできた取り組みについて
          </div>
        </CardHeader>
        <CardBody>
          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>何に</TableColumn>
              <TableColumn>いつ</TableColumn>
              <TableColumn>名称</TableColumn>
              <TableColumn>結果</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className="flex items-center">
                  <Link href="https://www.linux.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                      alt="Linux"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">資格</span>
                </TableCell>
                <TableCell>2019/2月・2022/9月</TableCell>
                <TableCell>普通自動車免許・大型自動二輪車免許</TableCell>
                <TableCell>取得
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="flex items-center">
                  <Link href="https://nodejs.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="Node.js"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">コンペ</span>
                </TableCell>
                <TableCell>2018年</TableCell>
                <TableCell>
第15回星槎道都大学美術学部高校生住宅設計コンクール</TableCell>
                <TableCell>奨励賞
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="flex items-center">
                  <Link href="https://reactjs.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="React"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">コンペ</span>
                </TableCell>
                <TableCell>2018年</TableCell>
                <TableCell>金沢市立工業高校学科内トイレ設計コンペ</TableCell>
                <TableCell>3位
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="flex items-center">
                  <Link href="https://reactjs.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="React"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">資格</span>
                </TableCell>
                <TableCell>2018年</TableCell>
                <TableCell>2級施工管理技士</TableCell>
                <TableCell>学科試験合格
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell className="flex items-center">
                  <Link href="https://nextjs.org/" isExternal>
                    <Image
                      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                      alt="Next.js"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">資格</span>
                </TableCell>
                <TableCell>2022年</TableCell>
                <TableCell>2級建築士</TableCell>
                <TableCell>学科試験・製図試験ともに合格
                </TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell className="flex items-center">
                  <Link href="https://rubyonrails.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
                      alt="Rails"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">コンペ</span>
                </TableCell>
                <TableCell>2024年</TableCell>
                <TableCell>北陸の家コンペ</TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell className="flex items-center">
                  <Link href="https://www.postgresql.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                      alt="PostgreSQL"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">資格</span>
                </TableCell>
                <TableCell>2023年</TableCell>
                <TableCell>1級建築士</TableCell>
                <TableCell>学科試験合格・製図試験合否待ち
                </TableCell>
              </TableRow>
              <TableRow key="8">
                <TableCell className="flex items-center">
                  <Link href="https://www.mongodb.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="MongoDB"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">コンペ</span>
                </TableCell>
                <TableCell>2023年</TableCell>
                <TableCell>北陸の家コンペ</TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <Card className="mb-8">
        <CardHeader className="flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl mt-5">その他活動</div>
          <div className="mt-3">高校から現在までに参加してきた活動歴</div>
        </CardHeader>
        <CardBody>
          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>活動名</TableColumn>
              <TableColumn>いつ</TableColumn>
              <TableColumn>活動内容</TableColumn>
              <TableColumn>活動が私に与えた効果</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className="flex items-center">
                  <Link href="https://git-scm.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                      alt="Git"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">職場体験（みずほ工業株式会社）</span>
                </TableCell>
                <TableCell>高校3年</TableCell>
                <TableCell>建設現場見学及び積算体験</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="flex items-center">
                  <Link href="https://www.docker.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                      alt="Docker"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">インターンシップ活動</span>
                </TableCell>
                <TableCell>2021年</TableCell>
                <TableCell>（株）五井建築研究所にて模型製作及び現場見学（5日間）</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="flex items-center">
                  <Link href="https://aws.amazon.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                      alt="AWS"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">ワークショップ</span>
                </TableCell>
                <TableCell>2022年</TableCell>
                <TableCell>石川県金沢市金石町で地域の人たちと街歩き及び簡易設計</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="flex items-center">
                  <Link href="https://slack.com/" isExternal>
                    <Image
                      src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
                      alt="Slack"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">3Dプリンター</span>
                </TableCell>
                <TableCell>2022・2023年</TableCell>
                <TableCell>大手建設会社と金沢市役所と合同でのプロジェクト（金沢市丸の内）</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell className="flex items-center">
                  <Link href="https://www.docker.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                      alt="Docker"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">3Dプリンタープロジェクト</span>
                </TableCell>
                <TableCell>2023年</TableCell>
                <TableCell>大手建設会社と合同のプロジェクト（北海道札幌）</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Skill;
